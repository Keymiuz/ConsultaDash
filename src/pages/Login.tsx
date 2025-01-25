import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});

const Login = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleAuthError = (error: any) => {
    console.error("Auth error:", error);
    
    // Mapeamento detalhado de mensagens de erro para português
    const errorMessages: { [key: string]: string } = {
      "Email not confirmed": "Por favor, confirme seu email antes de fazer login. Verifique sua caixa de entrada e spam.",
      "Invalid login credentials": "Email ou senha inválidos",
      "User already registered": "Este email já está cadastrado",
      "Database error saving new user": "Erro ao criar usuário. Tente novamente mais tarde",
    };

    // Verificar se o erro está no corpo da resposta
    let errorMessage = error.message;
    try {
      if (error.body) {
        const bodyError = JSON.parse(error.body);
        errorMessage = bodyError.message;
      }
    } catch (e) {
      console.error("Erro ao parsear mensagem de erro:", e);
    }

    const message = errorMessages[errorMessage] || errorMessage;
    
    toast({
      title: "Erro",
      description: message,
      variant: "destructive",
    });
  };

  const handleLogin = async (values: z.infer<typeof formSchema>) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });

      if (error) throw error;

      toast({
        title: "Login realizado com sucesso!",
      });
      navigate("/dashboard");
    } catch (error: any) {
      handleAuthError(error);
    }
  };

  const handleSignUp = async (values: z.infer<typeof formSchema>) => {
    try {
      const { error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          emailRedirectTo: window.location.origin,
        },
      });

      if (error) throw error;

      toast({
        title: "Cadastro realizado com sucesso!",
        description: "Verifique seu email para confirmar o cadastro.",
      });
    } catch (error: any) {
      handleAuthError(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Faça login para acessar o sistema de consultas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="seu@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-4">
                <Button type="submit" className="flex-1">
                  Entrar
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={form.handleSubmit(handleSignUp)}
                >
                  Cadastrar
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
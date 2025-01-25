import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";

const Dashboard = () => {
  const { data: appointments } = useQuery({
    queryKey: ["appointments"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("Consultas")
        .select("*")
        .order("appointment_date", { ascending: true });

      if (error) throw error;
      return data;
    },
  });

  const upcomingAppointments = appointments?.filter(
    (appointment) =>
      appointment.appointment_date &&
      new Date(appointment.appointment_date) >= new Date()
  );

  const todayAppointments = appointments?.filter(
    (appointment) =>
      appointment.appointment_date &&
      new Date(appointment.appointment_date).toDateString() ===
        new Date().toDateString()
  );

  const uniquePatients = new Set(appointments?.map((a) => a.patient_name)).size;

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total de Pacientes
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{uniquePatients}</div>
            <p className="text-xs text-muted-foreground">Pacientes únicos</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Consultas Hoje</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{todayAppointments?.length}</div>
            <p className="text-xs text-muted-foreground">
              {upcomingAppointments?.length} consultas agendadas
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Próximas Consultas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingAppointments?.map((appointment) => (
              <div
                key={appointment.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div>
                  <p className="font-medium">{appointment.patient_name}</p>
                  <p className="text-sm text-muted-foreground">
                    {appointment.appointment_type}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">
                    {appointment.appointment_date &&
                      format(
                        new Date(appointment.appointment_date),
                        "dd/MM/yyyy HH:mm"
                      )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
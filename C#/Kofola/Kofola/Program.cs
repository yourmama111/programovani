namespace Kofola
{
    public class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
        }

        static string SpocitejVysledek(int cenaVelkeho, int objemVelkeho, int cenaMaleho, int objemMaleho)
        {
            string vysledek = "NEVIM";

            return vysledek;
        }

        public static void PrectiVstup(TextReader vstup, TextWriter vystup)
        {
            int pocetProblemu = int.Parse(vstup.ReadLine()!);

            for (int i = 0; i < pocetProblemu; i++)
            {
                int cenaVelkeho = int.Parse(vstup.ReadLine()!);
                int objemVelkeho = int.Parse(vstup.ReadLine()!);
                int cenaMaleho = int.Parse(vstup.ReadLine()!);
                int objemMaleho = int.Parse(vstup.ReadLine()!);

                vystup.WriteLine(SpocitejVysledek(cenaVelkeho, objemVelkeho, cenaMaleho, objemMaleho));
            }
        }
    }
}

namespace Rekordy
{
    public class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
        }

        static int VyresProblem(int[] data)
        {
            int pocetRekordu = 0;

            return pocetRekordu;
        }

        public static void PrectiVstup(TextReader vstup, TextWriter vystup)
        {
            _ = int.TryParse(vstup.ReadLine(), out int pocetProblemu);
            for (int i = 0; i < pocetProblemu; i++)
            {
                vstup.ReadLine();
                string? line = vstup.ReadLine() ?? throw new Exception("Unknown Error (Zeptej se Simona co se stalo)");
                var enumerable = from x in line.Split(' ') select int.Parse(x);
                int[] list = enumerable.ToArray();
                int res = VyresProblem(list);
                vystup.WriteLine(res);
            }
        }
    }
}

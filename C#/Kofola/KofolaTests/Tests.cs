using Kofola;

namespace KofolaTests
{
    [TestClass]
    public class Tests
    {
        void BaseFile(string expectedFilename, string inputFilename)
        {
            string dir = "TestFiles/";

            using StreamReader expected = new StreamReader(dir + expectedFilename);
            using StreamReader input = new StreamReader(dir + inputFilename);

            StringWriter actual = new StringWriter();
            Program.PrectiVstup(input, actual);

            Assert.AreEqual(expected.ReadToEnd().ReplaceLineEndings(), actual.ToString().ReplaceLineEndings());
        }

        [TestMethod] public void Lehky() => BaseFile("A-lehky-out.txt", "A-lehky.txt");
        [TestMethod] public void Tezky() => BaseFile("A-tezky-out.txt", "A-tezky.txt");
    }
}
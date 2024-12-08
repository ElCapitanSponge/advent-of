namespace AOC._2024.Debug
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Day 4");
            var day = new Day4(Common.FileEnvironmentType.Debug, false, false);
            Console.WriteLine($"Part One Result: {day.SolvePartOne()}");
            Console.WriteLine($"Part Two Result: {day.SolvePartTwo()}");
        }
    }
}

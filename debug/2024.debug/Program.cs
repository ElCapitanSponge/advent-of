namespace AOC._2024.Debug
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Day 3");
            var day = new Day3(Common.FileEnvironmentType.Debug, true);
            Console.WriteLine($"Part One Result: {day.SolvePartOne()}");
            Console.WriteLine($"Part Two Result: {day.SolvePartTwo()}");
        }
    }
}

namespace AOC._2024.Tests;

using Xunit;
using Xunit.Abstractions;

public class Day1Test
{
    private readonly ITestOutputHelper _output;

    public Day1Test(ITestOutputHelper output)
    {
        _output = output;
    }

    [Fact]
    public void SamplePartOne()
    {
        Day1 day1 = new Day1(_2024.Common.FileEnvironmentType.Test);
        day1.LoadAndReadFile();
        day1.ParseFileLines();
        Assert.Equal(11, day1.SolvePartOne());
    }

    [Fact]
    public void QuestionPartOne()
    {
        Day1 day1 = new Day1(_2024.Common.FileEnvironmentType.Question);
        day1.LoadAndReadFile();
        day1.ParseFileLines();
        _output.WriteLine($"QuestionPartOne solution: {day1.SolvePartOne()}");
    }

    [Fact]
    public void SamplePartTwo()
    {
        Day1 day1 = new Day1(_2024.Common.FileEnvironmentType.Test);
        day1.LoadAndReadFile();
        day1.ParseFileLines();
        Assert.Equal(31, day1.SolvePartTwo());
    }

    [Fact]
    public void QuestionPartTwo()
    {
        Day1 day1 = new Day1(_2024.Common.FileEnvironmentType.Question);
        day1.LoadAndReadFile();
        day1.ParseFileLines();
        _output.WriteLine($"QuestionPartTwo solution: {day1.SolvePartTwo()}");
    }
}

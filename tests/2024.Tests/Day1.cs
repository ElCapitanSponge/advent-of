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
        Assert.Equal(11, day1.SolvePartOne());
    }

    [Fact]
    public void QuestionPartOne()
    {
        Day1 day1 = new Day1(_2024.Common.FileEnvironmentType.Question);
        _output.WriteLine($"Day 1 Part One: {day1.SolvePartOne()}");
    }

    [Fact]
    public void SamplePartTwo()
    {
        Day1 day1 = new Day1(_2024.Common.FileEnvironmentType.Test);
        Assert.Equal(31, day1.SolvePartTwo());
    }

    [Fact]
    public void QuestionPartTwo()
    {
        Day1 day1 = new Day1(_2024.Common.FileEnvironmentType.Question);
        _output.WriteLine($"Day 1 Part Two: {day1.SolvePartTwo()}");
    }
}

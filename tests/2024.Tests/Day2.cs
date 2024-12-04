namespace AOC._2024.Tests;

using AOC._2024.Common;
using Xunit;
using Xunit.Abstractions;

public class Day2Test
{
    private readonly ITestOutputHelper _output;

    public Day2Test(ITestOutputHelper output)
    {
        _output = output;
    }

	[Fact]
	public void SamplePartOne()
	{
		Day2 day2 = new Day2(FileEnvironmentType.Test);
		day2.LoadAndReadFile();
		Assert.Equal(2, day2.SolvePartOne());
	}

	[Fact]
	public void PartOne()
	{
		Day2 day2 = new Day2(FileEnvironmentType.Question);
		day2.LoadAndReadFile();
		_output.WriteLine($"Day 2 Part One: {day2.SolvePartOne()}");
	}

	[Fact]
	public void SamplePartTwo()
	{
		Day2 day2 = new Day2(FileEnvironmentType.Test);
		day2.LoadAndReadFile();
		Assert.Equal(4, day2.SolvePartTwo());
	}

	[Fact]
	public void PartTwo()
	{
		Day2 day2 = new Day2(FileEnvironmentType.Question);
		day2.LoadAndReadFile();
		_output.WriteLine($"Day 2 Part Two: {day2.SolvePartTwo()}");
	}
}

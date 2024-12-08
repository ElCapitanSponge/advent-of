namespace AOC._2024.Tests;

using AOC._2024.Common;
using Xunit;
using Xunit.Abstractions;

public class Day4Test
{
	private readonly ITestOutputHelper _output;

	public Day4Test(ITestOutputHelper output)
	{
		_output = output;
	}

	[Fact]
	public void SamplePartOne()
	{
		Day4 day4 = new Day4(FileEnvironmentType.Test);
		Assert.Equal(18, day4.SolvePartOne());
	}

	[Fact]
	public void PartOne()
	{
		Day4 day4 = new Day4(FileEnvironmentType.Question);
		_output.WriteLine($"Day 4 Part One: {day4.SolvePartOne()}");
	}

	[Fact]
	public void SamplePartTwo()
	{
		Day4 day4 = new Day4(FileEnvironmentType.Test);
		Assert.Equal(9, day4.SolvePartTwo());
	}

	[Fact]
	public void PartTwo()
	{
		Day4 day4 = new Day4(FileEnvironmentType.Question);
		_output.WriteLine($"Day 4 Part Two: {day4.SolvePartTwo()}");
	}
}

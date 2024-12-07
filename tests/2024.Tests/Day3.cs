namespace AOC._2024.Tests;

using AOC._2024.Common;
using Xunit;
using Xunit.Abstractions;

public class Day3Test
{
	private readonly ITestOutputHelper _output;

	public Day3Test(ITestOutputHelper output)
	{
		_output = output;
	}

	[Fact]
	public void SamplePartOne()
	{
		Day3 day3 = new Day3(FileEnvironmentType.Test);
		Assert.Equal(161, day3.SolvePartOne());
	}

	[Fact]
	public void PartOne()
	{
		Day3 day3 = new Day3(FileEnvironmentType.Question);
		_output.WriteLine($"Day 3 Part One: {day3.SolvePartOne()}");
	}

	/* [Fact] */
	/* public void SamplePartTwo() */
	/* { */
	/* 	Day3 day3 = new Day3(FileEnvironmentType.Test); */
	/* 	Assert.Equal(0, day3.SolvePartTwo()); */
	/* } */
	/**/
	/* [Fact] */
	/* public void PartTwo() */
	/* { */
	/* 	Day3 day3 = new Day3(FileEnvironmentType.Question); */
	/* 	_output.WriteLine($"Day 3 Part Two: {day3.SolvePartTwo()}"); */
	/* } */
}

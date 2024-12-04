namespace AOC._2024.Common;

public static class Assertion
{
	public static void Assert(bool condition, string message)
	{
		if (!condition)
		{
			throw new Exception(message);
		}
	}
}

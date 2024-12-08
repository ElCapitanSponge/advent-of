namespace AOC._2024.Common;

public static class Utils
{
    public static void Print(string value, FileEnvironmentType environmentType)
    {
        if (environmentType == FileEnvironmentType.Debug)
        {
            Console.WriteLine(value);
        }
    }

    public static void Print(int[] value, FileEnvironmentType environmentType)
    {
        if (environmentType == FileEnvironmentType.Debug)
        {
            Console.WriteLine($"[{string.Join(", ", value)}]");
        }
    }

    public static void Print(bool value, FileEnvironmentType environmentType)
    {
        if (environmentType == FileEnvironmentType.Debug)
        {
            Console.WriteLine(value);
        }
    }
}

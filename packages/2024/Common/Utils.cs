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

    public static void Print<K, V>(Tuple<K, V> value, FileEnvironmentType environmentType)
    {
        if (environmentType == FileEnvironmentType.Debug)
        {
            Console.WriteLine($"({value.Item1}, {value.Item2})");
        }
    }

    public static void Print<K, V, A, B>(Tuple<K, V, A, B> value, FileEnvironmentType environmentType)
    {
        if (environmentType == FileEnvironmentType.Debug)
        {
            Console.WriteLine($"({value.Item1}, {value.Item2} [{value.Item3}, {value.Item4}])");
        }
    }

    public static void Print<K, V>(List<Tuple<K, V>> value, FileEnvironmentType environmentType)
    {
        if (environmentType == FileEnvironmentType.Debug)
        {
            foreach (var item in value)
            {
                Console.Write($"({item.Item1}, {item.Item2}) ");
            }
            Console.WriteLine();
        }
    }

    public static void Print<K, V, A, B>(List<Tuple<K, V, A, B>> value, FileEnvironmentType environmentType)
    {
        if (environmentType == FileEnvironmentType.Debug)
        {
            foreach (var item in value)
            {
                Console.Write($"({item.Item1}, {item.Item2} [{item.Item3}, {item.Item4}]) ");
            }
            Console.WriteLine();
        }
    }
}

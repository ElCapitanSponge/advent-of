namespace AOC._2024.Common;

public static class FileHandler
{
    private static readonly string _testDataFolder = Path.Combine(
        Environment.SystemDirectory,
        "../../../data"
    );
    private static readonly string _questionDataFolder = Path.Combine(
        Environment.CurrentDirectory,
        "../../../../../packages/2024/data"
    );

    public static IEnumerable<string> ReadFileByLines(
        string fileName,
        FileEnvironmentType environmentType
    )
    {
        var path = environmentType switch
        {
            FileEnvironmentType.Test => Path.Combine(_testDataFolder, fileName),
            FileEnvironmentType.Question => Path.Combine(_questionDataFolder, fileName),
            _ => throw new ArgumentOutOfRangeException(
                nameof(environmentType),
                environmentType,
                null
            ),
        };

        return File.ReadLines(path);
    }

    public static byte[] ReadFileBytes(string fileName, FileEnvironmentType environmentType)
    {
        var path = environmentType switch
        {
            FileEnvironmentType.Test => Path.Combine(_testDataFolder, fileName),
            FileEnvironmentType.Question => Path.Combine(_questionDataFolder, fileName),
            _ => throw new ArgumentOutOfRangeException(
                nameof(environmentType),
                environmentType,
                null
            ),
        };

        return File.ReadAllBytes(path);
    }
}

public enum FileEnvironmentType
{
    Test,
    Question,
}

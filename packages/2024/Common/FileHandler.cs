namespace AOC._2024.Common;

public static class FileHandler
{
    private static readonly string _debugDataFolder = Path.Combine(
        Environment.CurrentDirectory,
        "../../tests/2024.Tests/data"
    );

    private static readonly string _debugDataFolderUseQuestion = Path.Combine(
        Environment.CurrentDirectory,
        "../../packages/2024/data"
    );

    private static readonly string _testDataFolder = Path.Combine(
        Environment.CurrentDirectory,
        "../../../data"
    );
    private static readonly string _questionDataFolder = Path.Combine(
        Environment.CurrentDirectory,
        "../../../../../packages/2024/data"
    );

    public static IEnumerable<string> ReadFileByLines(
        string fileName,
        FileEnvironmentType environmentType,
        bool useQuestionData = false
    )
    {
        var path = string.Empty;

        if (environmentType == FileEnvironmentType.Debug)
        {
            if (useQuestionData)
            {
                path = Path.Combine(_debugDataFolderUseQuestion, fileName);
            }
            path = Path.Combine(_debugDataFolder, fileName);
        }
        else if (environmentType == FileEnvironmentType.Test)
        {
            path = Path.Combine(_testDataFolder, fileName);
        }
        else if (environmentType == FileEnvironmentType.Question)
        {
            path = Path.Combine(_questionDataFolder, fileName);
        }
        else
        {
            throw new ArgumentOutOfRangeException(nameof(environmentType), environmentType, null);
        }

        return File.ReadLines(path);
    }

    public static byte[] ReadFileBytes(
        string fileName,
        FileEnvironmentType environmentType,
        bool useQuestionData = false
    )
    {
        var path = string.Empty;

        if (environmentType == FileEnvironmentType.Debug)
        {
            if (useQuestionData)
            {
                path = Path.Combine(_debugDataFolderUseQuestion, fileName);
            }
            path = Path.Combine(_debugDataFolder, fileName);
        }
        else if (environmentType == FileEnvironmentType.Test)
        {
            path = Path.Combine(_testDataFolder, fileName);
        }
        else if (environmentType == FileEnvironmentType.Question)
        {
            path = Path.Combine(_questionDataFolder, fileName);
        }
        else
        {
            throw new ArgumentOutOfRangeException(nameof(environmentType), environmentType, null);
        }

        return File.ReadAllBytes(path);
    }
}

public enum FileEnvironmentType
{
    Test,
    Question,
    Debug,
}

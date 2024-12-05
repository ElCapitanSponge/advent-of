namespace AOC._2024;

using AOC._2024.Common;

public abstract class DayBase
{
    #region Constructor

    public DayBase(FileEnvironmentType environmentType, bool useQuestionData)
    {
        this._environmentType = environmentType;
        this._useQuestionData = useQuestionData;
        this.LoadAndReadFile();
    }

    #endregion // Constructor

    #region Fields

    private readonly FileEnvironmentType _environmentType;
    private IEnumerable<string>? _fileLines;
    private bool _useQuestionData;

    #endregion // Fields

    #region Methods

    private void LoadAndReadFile()
    {
        this.FileLines = FileHandler.ReadFileByLines(
            this.FileName,
            this.EnvironmentType,
            this.UseQuestionData
        );
        Assertion.Assert(this.FileLines != null, "File lines are null");
        Assertion.Assert(this.FileLines?.Count() > 0, "File lines are empty");
    }

    protected abstract void ParseFileLines();

    public abstract int SolvePartOne();

    public abstract int SolvePartTwo();

    #endregion // Methods

    #region Properties

    protected FileEnvironmentType EnvironmentType => this._environmentType;

    protected IEnumerable<string>? FileLines
    {
        get => this._fileLines;
        private set => this._fileLines = value;
    }

    protected abstract string FileName { get; }

    protected abstract string SplitString { get; }

    protected bool UseQuestionData => this._useQuestionData;

    #endregion // Properties
}

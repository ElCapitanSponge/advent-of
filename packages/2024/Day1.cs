namespace AOC._2024;

using AOC._2024.Common;

public class Day1 : DayBase
{
    #region Constructor

    public Day1(FileEnvironmentType environmentType, bool useQuestionData = false)
        : base(environmentType, useQuestionData)
    {
        this._numbersColumnOne = new List<int>();
        this._numbersColumnTwo = new List<int>();
    }

    #endregion // Constructor

    #region Fields

    private readonly List<int> _numbersColumnOne;
    private readonly List<int> _numbersColumnTwo;

    #endregion // Fields

    #region Methods

    protected override void ParseFileLines()
    {
        this.FileLines?.ToList()
            .ForEach(line =>
            {
                string[] splitLine = line.Split(this.SplitString);
                Assertion.Assert(
                    splitLine.Length == 2,
                    $"Invalid line: {line} - {splitLine.Length}"
                );
                Assertion.Assert(
                    int.TryParse(splitLine[0], out _),
                    $"Invalid number: {splitLine[0]}"
                );
                Assertion.Assert(
                    int.TryParse(splitLine[1], out _),
                    $"Invalid number: {splitLine[1]}"
                );

                this._numbersColumnOne.Add(int.Parse(splitLine[0]));
                this._numbersColumnTwo.Add(int.Parse(splitLine[1]));
            });

        Assertion.Assert(
            this._numbersColumnOne.Count == this._numbersColumnTwo.Count,
            $"Invalid numbers count: {this._numbersColumnOne.Count} - {this._numbersColumnTwo.Count}"
        );
        this.SortNumberLists();
    }

    private int SimilarityScore(int listOneValue)
    {
        int count = this.NumbersColumnTwo.Where(value => value == listOneValue).Count();
        return count * listOneValue;
    }

    public override int SolvePartOne()
    {
        this.ParseFileLines();

        int result = 0;

        for (int i = 0; i < this.NumbersColumnOne.Count; i++)
        {
            if (this.NumbersColumnOne[i] > this.NumbersColumnTwo[i])
            {
                result += this.NumbersColumnOne[i] - this.NumbersColumnTwo[i];
            }
            else
            {
                result += this.NumbersColumnTwo[i] - this.NumbersColumnOne[i];
            }
        }

        return result;
    }

    public override int SolvePartTwo()
    {
        this.ParseFileLines();

        int result = 0;

        this.NumbersColumnOne.ForEach(value =>
        {
            result += this.SimilarityScore(value);
        });

        return result;
    }

    private void SortNumberLists()
    {
        this._numbersColumnOne.Sort();
        this._numbersColumnTwo.Sort();
    }

    #endregion // Methods

    #region Properties

    protected override string FileName => "Day1.dat";

    private List<int> NumbersColumnOne => this._numbersColumnOne;

    private List<int> NumbersColumnTwo => this._numbersColumnTwo;

    protected override string SplitString => "   ";

    #endregion // Properties
}

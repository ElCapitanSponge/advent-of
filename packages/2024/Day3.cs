using System.Text.RegularExpressions;
using AOC._2024.Common;

namespace AOC._2024;

public class Day3 : DayBase
{
    #region Constructor

    public Day3(FileEnvironmentType environmentType)
        : base(environmentType, false)
    {
        this._differentDataUsed = false;
    }

    public Day3(FileEnvironmentType environmentType, bool differentDataUsed)
        : base(environmentType, false)
    {
        this._differentDataUsed = differentDataUsed;
    }

    public Day3(FileEnvironmentType environmentType, bool useQuestionData, bool differentDataUsed)
        : base(environmentType, useQuestionData)
    {
        this._differentDataUsed = differentDataUsed;
    }

    #endregion // Constructor

    #region Fields

    private readonly bool _differentDataUsed;

    #endregion // Fields

    #region Methods

    private static List<string> ExtractMulPairs(string input)
    {
        List<string> result = new List<string>();
        string pattern = @"mul\((\d{1,3}),(\d{1,3})\)";
        Regex regex = new Regex(pattern);
        MatchCollection matches = regex.Matches(input);
        foreach (Match match in matches)
        {
            result.Add(match.Value);
        }
        return result;
    }

    private Tuple<int, int>? ExtractMulValues(string input)
    {
        int? a = null;
        int? b = null;

        input = input.Replace("mul(", "").Replace(")", "");
        string[] values = input.Split(",");

        if (values.Length == 2)
        {
            a = int.Parse(values[0]);
            b = int.Parse(values[1]);
        }

        if (a == null || b == null)
        {
            return null;
        }

        return new Tuple<int, int>(a.Value, b.Value);
    }

    private int Multiply(int a, int b) => a * b;

    protected override void ParseFileLines() { }

    public override int SolvePartOne()
    {
        int result = 0;

        if (this.TestDataDiffersBetweenParts)
        {
            this.LoadAndReadFile(SolutionPart.PartOne);
        }

        this.FileLines?.ToList()
            .ForEach(line =>
            {
                Utils.Print(line, this.EnvironmentType);
                List<string> mulPairs = ExtractMulPairs(line);
                mulPairs.ForEach(mulPair =>
                {
                    Tuple<int, int>? values = ExtractMulValues(mulPair);
                    if (values != null)
                    {
                        result += Multiply(values.Item1, values.Item2);
                    }
                });
            });
        return result;
    }

    public override int SolvePartTwo()
    {
        int result = 0;

        if (this.TestDataDiffersBetweenParts)
        {
            this.LoadAndReadFile(SolutionPart.PartTwo);
        }

        return result;
    }

    #endregion // Methods

    #region Properties

    protected override string FileName => "Day3.dat";

    protected override string SplitString => "";

    protected override bool TestDataDiffersBetweenParts => this._differentDataUsed;

    #endregion // Properties
}

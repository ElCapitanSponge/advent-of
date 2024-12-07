namespace AOC._2024;

using AOC._2024.Common;

public class Day2 : DayBase
{
    #region Constructor

    public Day2(FileEnvironmentType environmentType)
        : base(environmentType, false) { }

    public Day2(FileEnvironmentType environmentType, bool useQuestionData)
        : base(environmentType, useQuestionData) { }

    #endregion // Constructor

    #region Methods

    protected override void ParseFileLines() { }

    public bool IsSafeReport(int[] reportLine, bool dampened = false)
    {
        List<int[]> increasePairs = new List<int[]>();
        List<int[]> decreasePairs = new List<int[]>();
        List<int[]> duplicatePairs = new List<int[]>();
        List<int[]> invalidPairs = new List<int[]>();

        for (int i = 0; i < reportLine.Length - 1; i++)
        {
            int current = reportLine[i];
            int next = reportLine[i + 1];
            int distance = Math.Abs(next - current);

            if (distance > 3)
            {
                invalidPairs.Add(new int[2] { current, next });
            }
            else if (distance == 0)
            {
                duplicatePairs.Add(new int[2] { current, next });
            }
            else if (current < next)
            {
                increasePairs.Add(new int[2] { current, next });
            }
            else if (current > next)
            {
                decreasePairs.Add(new int[2] { current, next });
            }
        }

        int validCount = reportLine.Length - 1;
        if ((increasePairs.Count == validCount || decreasePairs.Count == validCount))
        {
            return true;
        }

        if (dampened)
        {
            int valueToRemove = -1;

            if (decreasePairs.Count == 1 && invalidPairs.Count == 0 && duplicatePairs.Count == 0)
            {
                valueToRemove = decreasePairs.First()[0];
                int[] tmpReportLine = reportLine.Where(x => x != valueToRemove).ToArray();
                if (this.IsSafeReport(tmpReportLine))
                {
                    return true;
                }
                valueToRemove = decreasePairs.First()[1];
                tmpReportLine = reportLine.Where(x => x != valueToRemove).ToArray();
                return this.IsSafeReport(tmpReportLine);
            }

            if (increasePairs.Count == 1 && invalidPairs.Count == 0 && duplicatePairs.Count == 0)
            {
                valueToRemove = increasePairs.First()[0];
                int[] tmpReportLine = reportLine.Where(x => x != valueToRemove).ToArray();
                if (this.IsSafeReport(tmpReportLine))
                {
                    return true;
                }
                valueToRemove = increasePairs.First()[1];
                tmpReportLine = reportLine.Where(x => x != valueToRemove).ToArray();
                return this.IsSafeReport(tmpReportLine);
            }

            if (invalidPairs.Count == 1 && duplicatePairs.Count == 0)
            {
                valueToRemove = invalidPairs.First()[0];
                int[] tmpReportLine = reportLine.Where(x => x != valueToRemove).ToArray();
                if (this.IsSafeReport(tmpReportLine))
                {
                    return true;
                }
                valueToRemove = invalidPairs.First()[1];
                tmpReportLine = reportLine.Where(x => x != valueToRemove).ToArray();
                return this.IsSafeReport(tmpReportLine);
            }

            if (duplicatePairs.Count == 1 && invalidPairs.Count == 0)
            {
                valueToRemove = duplicatePairs.First()[0];
                int firstIndexOf = Array.IndexOf(reportLine, valueToRemove);
                int[] tmpReportLine = reportLine.Where((x, i) => i != firstIndexOf).ToArray();
                Utils.Print(tmpReportLine, this.EnvironmentType);
                return this.IsSafeReport(tmpReportLine);
            }
        }

        return false;
    }

    public override int SolvePartOne()
    {
        int safeCount = 0;

        this.FileLines?.ToList()
            .ForEach(line =>
            {
                string[] splitLine = line.Split(this.SplitString);
                int[] reportLine = splitLine.Select(int.Parse).ToArray();
                if (this.IsSafeReport(reportLine))
                {
                    safeCount++;
                }
            });
        return safeCount;
    }

    public override int SolvePartTwo()
    {
        int safeCount = 0;

        this.FileLines?.ToList()
            .ForEach(line =>
            {
                string[] splitLine = line.Split(this.SplitString);
                int[] reportLine = splitLine.Select(int.Parse).ToArray();
                Utils.Print(reportLine, this.EnvironmentType);
                if (this.IsSafeReport(reportLine, true))
                {
                    Utils.Print("Safe", this.EnvironmentType);
                    safeCount++;
                }
                else
                {
                    Utils.Print("Unsafe", this.EnvironmentType);
                }
            });
        return safeCount;
    }

    #endregion // Methods

    #region Properties

    protected override string FileName => "Day2.dat";

    protected override string SplitString => " ";

    #endregion // Properties
}

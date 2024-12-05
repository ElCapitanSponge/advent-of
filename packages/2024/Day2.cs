namespace AOC._2024;

using AOC._2024.Common;

public class Day2 : DayBase
{
    #region Constructor

    public Day2(FileEnvironmentType environmentType, bool useQuestionData = false) : base(environmentType, useQuestionData)
    {
    }

    #endregion // Constructor

    #region Methods

    private List<Tuple<int, Trajectory>>? DampenPair(
        List<Tuple<int, Trajectory>> pairMap,
        int[] reportLine
    )
    {
        Utils.Print("DampenPair", this.EnvironmentType);
        Utils.Print(reportLine, this.EnvironmentType);
        Utils.Print(pairMap, this.EnvironmentType);

        Trajectory trajectory = this.GetTrajectoryDampner(pairMap);
        int originalCount = pairMap.Count;
        List<Tuple<int, Trajectory>> dampenedPairMap = new List<Tuple<int, Trajectory>>();

        for (int i = 1; i < reportLine.Length; )
        {
            int a = reportLine[i - 1];
            int b = reportLine[i];

            if (trajectory == Trajectory.Increasing)
            {
                if (a < b)
                {
                    dampenedPairMap.Add(
                        new Tuple<int, Trajectory>(Math.Abs(a - b), Trajectory.Increasing)
                    );
                    i++;

                    Utils.Print($"a: {a}, b: {b} - passed", this.EnvironmentType);
                }
                else
                {
                    reportLine = reportLine.Where((val, idx) => idx != i).ToArray();

                    Utils.Print($"a: {a}, b: {b} - failed", this.EnvironmentType);
                    Utils.Print(reportLine, this.EnvironmentType);
                }
            }
            else if (trajectory == Trajectory.Decreasing)
            {
                if (a > b)
                {
                    dampenedPairMap.Add(
                        new Tuple<int, Trajectory>(Math.Abs(a - b), Trajectory.Decreasing)
                    );
                    i++;

                    Utils.Print($"a: {a}, b: {b} - passed", this.EnvironmentType);
                }
                else
                {
                    reportLine = reportLine.Where((val, idx) => idx != i).ToArray();

                    Utils.Print($"a: {a}, b: {b} - failed", this.EnvironmentType);
                    Utils.Print(reportLine, this.EnvironmentType);
                }
            }
        }

        Utils.Print("Dampened Pair Map", this.EnvironmentType);
        Utils.Print(dampenedPairMap, this.EnvironmentType);

        if (dampenedPairMap.Count < originalCount - 1)
        {
            return null;
        }

        return dampenedPairMap;
    }

    private List<Tuple<int, Trajectory>> GetPairMap(int[] reportLine)
    {
        int pairs = reportLine.Length - 1;

        List<Tuple<int, Trajectory>> pairMap = new List<Tuple<int, Trajectory>>();

        for (int i = 0; i < pairs; i++)
        {
            int a = reportLine[i];
            int b = reportLine[i + 1];

            Trajectory trajectory = Trajectory.Undetermined;
            if (a < b)
            {
                trajectory = Trajectory.Increasing;
            }
            else if (a > b)
            {
                trajectory = Trajectory.Decreasing;
            }

            int difference = Math.Abs(a - b);
            pairMap.Add(new Tuple<int, Trajectory>(difference, trajectory));
        }

        return pairMap;
    }

    private Trajectory GetTrajectory(List<Tuple<int, Trajectory>> pairMap)
    {
        if (pairMap.Where(pair => pair.Item2 == Trajectory.Increasing).Count() == pairMap.Count)
        {
            return Trajectory.Increasing;
        }

        if (pairMap.Where(pair => pair.Item2 == Trajectory.Decreasing).Count() == pairMap.Count)
        {
            return Trajectory.Decreasing;
        }

        return Trajectory.Undetermined;
    }

    private Trajectory GetTrajectoryDampner(List<Tuple<int, Trajectory>> pairMap)
    {
        if (pairMap.Where(pair => pair.Item2 == Trajectory.Increasing).Count() >= pairMap.Count - 1)
        {
            return Trajectory.Increasing;
        }

        if (pairMap.Where(pair => pair.Item2 == Trajectory.Decreasing).Count() >= pairMap.Count - 1)
        {
            return Trajectory.Decreasing;
        }

        return Trajectory.Undetermined;
    }

    private bool IsSafeReport(int[] reportLine)
    {
        List<Tuple<int, Trajectory>> pairMap = this.GetPairMap(reportLine);

        if (this.GetTrajectory(pairMap) == Trajectory.Undetermined)
        {
            return false;
        }

        if (!this.IsValidHops(pairMap))
        {
            return false;
        }

        return true;
    }

    private bool IsSafeReportDampner(int[] reportLine)
    {
        List<Tuple<int, Trajectory>> pairMap = this.GetPairMap(reportLine);

        if (this.GetTrajectoryDampner(pairMap) == Trajectory.Undetermined)
        {
            return false;
        }

        List<Tuple<int, Trajectory>>? dampenedPairMap = this.DampenPair(pairMap, reportLine);

        if (dampenedPairMap == null)
        {
            return false;
        }

        if (!this.IsValidHops(dampenedPairMap))
        {
            return false;
        }

        return true;
    }

    private bool IsValidHops(List<Tuple<int, Trajectory>> pairMap)
    {
        if (pairMap.Where(pair => pair.Item1 > 3 || pair.Item1 == 0).Count() > 0)
        {
            return false;
        }

        return true;
    }

	protected override void ParseFileLines()
	{
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
                if (this.IsSafeReportDampner(reportLine))
                {
                    safeCount++;
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

public enum Trajectory
{
    Undetermined,
    Increasing,
    Decreasing,
}

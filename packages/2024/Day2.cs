namespace AOC._2024;

using AOC._2024.Common;

public class Day2
{
    #region Constructor

    public Day2(FileEnvironmentType environmentType)
    {
        this._environmentType = environmentType;
    }

    #endregion // Constructor

    #region Fields

    private readonly FileEnvironmentType _environmentType;
    private IEnumerable<string>? _fileLines;

    #endregion // Fields

    #region Methods

    private List<Tuple<int, Trajectory>>? DampenPair(
        List<Tuple<int, Trajectory>> pairMap,
        int[] reportLine
    )
    {
        Trajectory trajectory = this.GetTrajectoryDampner(pairMap);

        int originalCount = pairMap.Count;

        if (trajectory == Trajectory.Increasing)
        {
            pairMap = pairMap
                .Select(pair => new Tuple<int, Trajectory>(pair.Item1, Trajectory.Increasing))
                .ToList();
        }

        if (trajectory == Trajectory.Decreasing)
        {
            pairMap = pairMap
                .Select(pair => new Tuple<int, Trajectory>(pair.Item1, Trajectory.Decreasing))
                .ToList();
        }

        if (pairMap.Count < originalCount - 1)
        {
            return null;
        }

        if (pairMap.Count == originalCount)
        {
            return pairMap;
        }

        List<Tuple<int, Trajectory>> dampenedPairMap = new List<Tuple<int, Trajectory>>();

        int aIndex = 0;
        int bIndex = 1;

        while (bIndex < reportLine.Length)
        {
            int a = reportLine[aIndex];
            int b = reportLine[bIndex];

            if (trajectory == Trajectory.Increasing)
            {
                if (a < b)
                {
                    dampenedPairMap.Add(
                        new Tuple<int, Trajectory>(Math.Abs(a - b), Trajectory.Increasing)
                    );
                    aIndex = bIndex;
                    bIndex++;
                }
                else
                {
                    bIndex++;
                }
            }
            else if (trajectory == Trajectory.Decreasing)
            {
                if (a > b)
                {
                    dampenedPairMap.Add(
                        new Tuple<int, Trajectory>(Math.Abs(a - b), Trajectory.Decreasing)
                    );
                    aIndex = bIndex;
                    bIndex++;
                }
                else
                {
                    bIndex++;
                }
            }
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

    private void LoadAndReadFile()
    {
        this.FileLines = FileHandler.ReadFileByLines(this.FileName, this.EnvironmentType);
        Assertion.Assert(this.FileLines != null, "File lines are null");
        Assertion.Assert(this.FileLines?.Count() > 0, "File lines are empty");
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

    public int SolvePartOne()
    {
        this.LoadAndReadFile();

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

    public int SolvePartTwo()
    {
        this.LoadAndReadFile();

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

    private FileEnvironmentType EnvironmentType => this._environmentType;

    private IEnumerable<string>? FileLines
    {
        get => this._fileLines;
        set => this._fileLines = value;
    }

    private string FileName => "Day2.dat";

    private string SplitString => " ";

    #endregion // Properties
}

public enum Trajectory
{
    Undetermined,
    Increasing,
    Decreasing,
}

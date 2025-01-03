namespace AOC._2024;

using AOC._2024.Common;

public class Day4 : DayBase
{
    #region Constructor

    public Day4(FileEnvironmentType environmentType)
        : base(environmentType, false, false) { }

    public Day4(FileEnvironmentType environmentType, bool differentDataUsed)
        : base(environmentType, false, differentDataUsed) { }

    public Day4(FileEnvironmentType environmentType, bool useQuestionData, bool differentDataUsed)
        : base(environmentType, useQuestionData, differentDataUsed) { }

    #endregion // Constructor

    #region Fields

    char[,]? _findAWord;

    #endregion // Fields

    #region Methods

    private int FindWord(char[,] grid, string word)
    {
        int count = 0;
        int rows = grid.GetLength(0);
        int cols = grid.GetLength(1);
        int len = word.Length; // Directions: (row offset, col offset)
        int[][] directions = new int[][]
        {
            new int[] { 0, 1 }, // right
            new int[] { 1, 0 }, // down
            new int[] { 0, -1 }, // left
            new int[] { -1, 0 }, // up
            new int[] { 1, 1 }, // down-right
            new int[] { 1, -1 }, // down-left
            new int[] { -1, 1 }, // up-right
            new int[] { -1, -1 }, // up-left
        };
        for (int r = 0; r < rows; r++)
        {
            for (int c = 0; c < cols; c++)
            {
                foreach (var dir in directions)
                {
                    int rd = dir[0];
                    int cd = dir[1];
                    if (this.IsWordPresent(grid, word, r, c, rd, cd))
                    {
                        count++;
                    }
                }
            }
        }
        return count;
    }

    private bool IsWordPresent(char[,] grid, string word, int r, int c, int rd, int cd)
    {
        int rows = grid.GetLength(0);
        int cols = grid.GetLength(1);
        int len = word.Length;
        for (int i = 0; i < len; i++)
        {
            int nr = r + i * rd;
            int nc = c + i * cd;
            if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || grid[nr, nc] != word[i])
            {
                return false;
            }
        }
        return true;
    }

    private bool IsXMasPresent(char[,] grid, int r, int c)
    {
        return (
            (
                grid[r, c] == 'M'
                && grid[r, c + 2] == 'S'
                && grid[r + 1, c + 1] == 'A'
                && grid[r + 2, c] == 'M'
                && grid[r + 2, c + 2] == 'S'
            )
            || // M.S - .A. - M.S
            (
                grid[r, c] == 'S'
                && grid[r, c + 2] == 'M'
                && grid[r + 1, c + 1] == 'A'
                && grid[r + 2, c] == 'S'
                && grid[r + 2, c + 2] == 'M'
            )
            || // S.M - .A. - S.M
            (
                grid[r, c] == 'M'
                && grid[r, c + 2] == 'M'
                && grid[r + 1, c + 1] == 'A'
                && grid[r + 2, c] == 'S'
                && grid[r + 2, c + 2] == 'S'
            )
            || // M.M - .A. - S.S
            (
                grid[r, c] == 'S'
                && grid[r, c + 2] == 'S'
                && grid[r + 1, c + 1] == 'A'
                && grid[r + 2, c] == 'M'
                && grid[r + 2, c + 2] == 'M'
            ) // S.S - .A. - M.M
        );
    }

    protected override void ParseFileLines()
    {
        int columns = this.FileLines?.First().Length ?? 0;
        int rows = this.FileLines?.Count() ?? 0;

        this._findAWord = new char[rows, columns];

        for (int i = 0; i < rows; i++)
        {
            string line = this.FileLines?.ElementAt(i) ?? string.Empty;
            for (int j = 0; j < columns; j++)
            {
                this._findAWord[i, j] = line[j];
            }
        }
    }

    public override int SolvePartOne()
    {
        this.ParseFileLines();

        if (this._findAWord == null)
        {
            return 0;
        }

        return this.FindWord(this._findAWord, this.FindWordString);
    }

    public override int SolvePartTwo()
    {
        this.ParseFileLines();

        if (this._findAWord == null)
        {
            return 0;
        }

        int count = 0;
        int rows = this._findAWord.GetLength(0);
        int cols = this._findAWord.GetLength(1);
        for (int r = 0; r < rows - 2; r++)
        {
            for (int c = 0; c < cols - 2; c++)
            {
                if (this.IsXMasPresent(this._findAWord, r, c))
                {
                    count++;
                }
            }
        }
        return count;
    }

    #endregion // Methods

    #region Properties

    protected override string FileName => "Day4.dat";

    protected override string SplitString => "";

    private string FindWordString => "XMAS";

    #endregion // Properties
}

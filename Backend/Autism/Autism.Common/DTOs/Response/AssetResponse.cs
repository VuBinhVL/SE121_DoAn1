using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.Common.DTOs.Response
{
    public class Probability
    {
        public int classes { get; set; }
        public string label { get; set; }
        public double probability { get; set; }
    }

    public class PredictionResult
    {
        public string label { get; set; }
        public List<Probability> probabilities { get; set; }
    }
}

module.exports = {
  md: [
    {
      type: "category",
      label: "Getting Started",
      items: ["getting-started"],
      collapsed: false,
    },
    {
      type: "category",
      label: "Evaluation",
      items: [
        "evaluation-introduction",
        "evaluation-test-cases",
        "evaluation-datasets",
        "evaluation-datasets-synthetic-data",
        {
          type: "category",
          label: "Metrics",
          items: [
            "metrics-introduction",
            "metrics-llm-evals",
            "metrics-summarization",
            "metrics-answer-relevancy",
            "metrics-faithfulness",
            "metrics-contextual-precision",
            "metrics-contextual-recall",
            "metrics-contextual-relevancy",
            "metrics-hallucination",
            "metrics-bias",
            "metrics-toxicity",
            "metrics-ragas",
            "metrics-knowledge-retention",
            "metrics-custom",
          ],
          collapsed: false,
        },
        {
          type: "category",
          label: "Benchmarks",
          items: [
            "benchmarks-introduction",
            "benchmarks-mmlu",
            "benchmarks-hellaswag",
            "benchmarks-big-bench-hard",
            "benchmarks-drop",
            "benchmarks-truthful-qa",
            "benchmarks-human-eval",
            "benchmarks-gsm8k",
          ],
          collapsed: true,
        },
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "Confident AI",
      items: [
        "confident-ai-introduction",
        "confident-ai-manage-datasets",
        "confident-ai-evaluate-datasets",
        "confident-ai-analyze-evaluations",
        "confident-ai-github-actions",
        "confident-ai-evals-in-production",
        // "confident-ai-tracing",
        "confident-ai-tracing-placeholder"
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "Guides",
      items: [
        "guides-regression-testing-in-cicd",
        "guides-rag-evaluation",
        "guides-optimizing-hyperparameters",
        "guides-building-custom-metrics",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "Integrations",
      items: [
        "integrations-introduction",
        "integrations-llamaindex",
        "integrations-huggingface",
      ],
      collapsed: true,
    },
    {
      type: "category",
      label: "Others",
      items: ["data-privacy"],
      collapsed: false,
    },
  ],
};

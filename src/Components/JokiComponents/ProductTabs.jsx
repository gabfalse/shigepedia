export default function ProductTabs({
  tabs = [],
  activeTab,
  onChange,
}) {
  return (
    <div className="flex-center">
      <div className="flex flex-wrap justify-center gap-3">

        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={`btn btn-md ${
              activeTab === tab.id
                ? "btn-primary"
                : "btn-outline"
            }`}
          >
            {tab.label}
          </button>
        ))}

      </div>
    </div>
  );
}
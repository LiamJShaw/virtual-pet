export const createIndicator = (stat, startingValue=0) => {

    const indicatorContainer = document.createElement("div");
    indicatorContainer.classList.add("indicator-container");

    const statName = document.createElement("p");
    statName.classList.add("stat-name");
    statName.textContent = stat;

    const indicator = document.createElement("div");
    indicator.className = "indicator";

    const level = document.createElement("div");
    level.className = `level ${stat}`;
    level.setAttribute("data-stat", stat);
    level.style.width = `${startingValue}%`;

    indicator.append(level);

    indicatorContainer.append(statName);
    indicatorContainer.append(indicator);

    return indicatorContainer;
}

export const createStatsContainer = () => {

    const statsContainer = document.createElement("div");
    statsContainer.classList.add("stats-container");

    return statsContainer;
}
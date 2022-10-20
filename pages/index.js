import RecurringWorkingHours from "../components/RecurringWorkingHours";
import SpecificWorkingHours from "../components/SpecificWorkingHours";

export default function Home() {
  return (
    <div className="p-6 flex flex-col sm:flex-row gap-6 justify-center">
      <RecurringWorkingHours />
      <SpecificWorkingHours />
    </div>
  );
}

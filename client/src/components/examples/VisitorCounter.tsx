import VisitorCounter from '../VisitorCounter';

export default function VisitorCounterExample() {
  return (
    <div className="p-8">
      <VisitorCounter dailyVisitors={1234} currentVisitors={42} />
    </div>
  );
}

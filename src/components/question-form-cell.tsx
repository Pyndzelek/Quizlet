export default function QuestionFormCell() {
  return (
    <div className="border-2 p-4 pt-2 rounded-md">
      <div className="space-y-1">
        <Label htmlFor="question2" className="text-lg">
          Question 2
        </Label>
        <Input id="question2" placeholder="What is the capital of Italy?" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3">
        <div>
          <Label htmlFor="q2a1">
            Answer A - <span className="text-green-600">CORRECT ANSWER</span>
          </Label>
          <Input id="q2a1" />
        </div>
        <div>
          <Label htmlFor="q2a2">Answer B</Label>
          <Input id="q2a2" />
        </div>
        <div>
          <Label htmlFor="q2a3">Answer C</Label>
          <Input id="q2a3" />
        </div>
        <div>
          <Label htmlFor="q2a4">Answer D</Label>
          <Input id="q2a4" />
        </div>
      </div>
    </div>
  );
}

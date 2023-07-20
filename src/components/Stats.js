export default function Stats({ items }) {
  let total = items.length;

  if (!total) return <em className="stats">Add some items to your list 😎</em>;

  let totalPacked = items.filter((item) => item.packed).length;
  let percentage = (totalPacked / total) * 100;

  return (
    <footer className="stats">
      {percentage === 100 ? (
        <em>You got everything Ready to go✈️</em>
      ) : (
        items.length > 0 && (
          <em>
            💼 You have {total} items on your list and you already packed
            {" " + totalPacked} ({percentage.toFixed()}%)
          </em>
        )
      )}
    </footer>
  );
}

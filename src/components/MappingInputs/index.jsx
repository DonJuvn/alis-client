import useHighlightedText from '../../hooks/useHighlightedText';

const MappingInputs = () => {
  const copyBuffer = useHighlightedText();

  const handleAddInputButton = () => {
    console.log(copyBuffer);
  };

  return (
    <div>
      <button
        className="add-mapping-input-button"
        onClick={handleAddInputButton}
      >
        Добавить поле
      </button>
      <div className="mapping-inputs-list">
        <div className="mapping-input">
          <p>{}</p>
          <input type="text" placeholder="Путь к данным" />
          <button className="delete-mapping-input-button">Удалить</button>
        </div>
      </div>
    </div>
  );
};

export default MappingInputs;

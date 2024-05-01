import DocumentSelect from '../components/DocumentSelect';
import MappingInputs from '../components/MappingInputs';

const TemplateGeneration = () => {
  return (
    <div className="template-generation-wrapper">
      <h2>Генерация шаблонов</h2>
      <p>Здесь будет форма для генерации шаблонов</p>
      Категория:
      <select>
        <option value="1">Категория 1</option>
        <option value="2">Категория 2</option>
        <option value="3">Категория 3</option>
      </select>
      Тип документа:
      <select>
        <option value="1">Тип 1</option>
        <option value="2">Тип 2</option>
        <option value="3">Тип 3</option>
      </select>
      <hr />
      <div className="template-generation-working-zone">
        <div className="document-select-wrapper">
          <DocumentSelect />
        </div>
        <div className="mapping-inputs-wrapper">
          <MappingInputs />
        </div>
      </div>
    </div>
  );
};

export default TemplateGeneration;

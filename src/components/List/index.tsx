import { TodoList } from "../../models/todoList";
import { Button } from "../../components/Common";
import moment from "moment";

interface ListProps {
  list: TodoList;
  index: number;
  isSaving: boolean;
  isDeleting: boolean;
  selectList: (list: TodoList) => void;
  removeElementFromList: (id: number) => void;
}

export const List: React.FC<ListProps> = ({
  list,
  index,
  selectList,
  isSaving,
  isDeleting,
  removeElementFromList,
}) => {
  return (
    <tr key={index}>
      <td>{list.name}</td>
      <td>{moment(list.taskDate).format("MM/DD/YYYY")}</td>
      <td>
        <Button
          type="is-warning"
          title="Edit"
          onClick={() => selectList(list)}
          disabled={isSaving || isDeleting}
        />
        &nbsp;
        <Button
          type="is-danger"
          title="Delete"
          loading={isDeleting}
          onClick={() => removeElementFromList(list.id)}
          disabled={isSaving || isDeleting}
        />
      </td>
    </tr>
  );
};

export default List;

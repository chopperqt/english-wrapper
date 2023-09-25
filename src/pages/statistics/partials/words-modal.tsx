import { Modal, Table } from "antd"

import { StatisticModel } from "../../../models/statistics.model"
import { useModal } from "../../../utils/use-modal"
import { StatisticColumns } from "../constants"

interface WordsModalProps {
  list: StatisticModel[]
}

export const WordsModal = ({ list }: WordsModalProps) => {
  const { isOpened, handleClose, handleOpen } = useModal()

  return (
    <>
      <button onClick={handleOpen}>Подробнее...</button>
      <Modal open={isOpened} footer={null} onCancel={handleClose}>
        <Table dataSource={list} columns={StatisticColumns} pagination={false} />
      </Modal>
    </>
  )
}

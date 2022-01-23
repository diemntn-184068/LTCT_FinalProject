/* eslint-disable react/prop-types */
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { addDataAdvertisement } from "../../variables/general";

export default function AddAdvertisement(props) {
  const { isOpen, onClose } = props;
  // const { onClose } = useDisclosure()

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [advertismentUrl, setAdvertismentUrl] = useState("");
  const [imageUrl, setImageUrl] = useState(
    "https://minio.hisoft.com.vn/qr-scan/214341604_2237957043012540_977929668598209155_n.jpg"
  );
  const [type, setType] = useState("quang_cao");
  const [status, setStatus] = useState("");
  const [startAt, setStartAt] = useState("2021-12-08T00:00:00.000Z");
  const [endAt, setEndAt] = useState("2021-12-08T23:59:59.000Z");
  const [productId, setProductId] = useState("");
  const [saleId, setSaleId] = useState("");
  const initialRef = React.useRef();
  const finalRef = React.useRef();
  const advertisementUsing = {
    title,
    content,
    advertismentUrl,
    imageUrl,
    type,
    status,
    endAt,
    startAt,
    productId,
    saleId,
  };
  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cập nhật nội dung quảng cáo</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel>Tiêu đề</FormLabel>
              <Input
                onChange={e => {
                  setTitle(e.target.value);
                }}
                value={title}
                ref={initialRef}
                placeholder="Quảng cáo 20-10"
                isRequired={true}
              />
            </FormControl>

            <FormControl isRequired mt={4}>
              <FormLabel>Nội dung</FormLabel>
              <Input
                onChange={e => {
                  setContent(e.target.value);
                }}
                value={content}
                placeholder="ANHTN đang online"
                isRequired={true}
              />
            </FormControl>

            <FormControl isRequired mt={4}>
              <FormLabel>Link quảng cáo</FormLabel>
              <Input
                onChange={e => {
                  setAdvertismentUrl(e.target.value);
                }}
                value={advertismentUrl}
                placeholder="https://localhost:3000"
                isRequired={true}
              />
            </FormControl>

            <FormControl isRequired mt={4}>
              <FormLabel>Trạng thái</FormLabel>
              <Input
                onChange={e => {
                  setStatus(e.target.value);
                }}
                value={status}
                placeholder="Last name"
                isRequired={true}
              />
            </FormControl>

            <FormControl isRequired mt={4}>
              <FormLabel>Thời gian bắt đầu</FormLabel>
              <Input
                onChange={e => {
                  setStartAt(e.target.value);
                }}
                value={startAt}
                placeholder="Last name"
                isRequired={true}
              />
            </FormControl>

            <FormControl isRequired mt={4}>
              <FormLabel>Thời gian kết thúc</FormLabel>
              <Input
                onChange={e => {
                  setEndAt(e.target.value);
                }}
                value={endAt}
                placeholder="Last name"
              />
            </FormControl>

            <FormControl isRequired mt={4}>
              <FormLabel>Link ảnh</FormLabel>
              <Input
                onChange={e => {
                  setImageUrl(e.target.value);
                }}
                value={imageUrl}
                placeholder="https://minio.hisoft.com.vn/qr-scan/214341604_2237957043012540_977929668598209155_n.jpg"
                isRequired={true}
              />
            </FormControl>

            <FormControl isRequired mt={4}>
              <FormLabel>ID của sản phẩm</FormLabel>
              <Input
                onChange={e => {
                  setProductId(e.target.value);
                }}
                placeholder="124123"
                isRequired={true}
              />
            </FormControl>

            <FormControl isRequired mt={4}>
              <FormLabel>ID của bản khuyến mại</FormLabel>
              <Input
                onChange={e => {
                  setSaleId(e.target.value);
                }}
                placeholder="61bef970aae2b6ad1b62fc59"
                isRequired={true}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="teal"
              mr={3}
              onClick={async () => {
                await addDataAdvertisement(advertisementUsing);
                window.location.reload();
              }}
            >
              Lưu
            </Button>
            <Button onClick={onClose}>Thoát</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

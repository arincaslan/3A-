import React from 'react';
import { Box, Text } from "@chakra-ui/react";
import DropzoneComponent, { useFileDrop } from '../../../../../Tools/UseFileDrop/UseFileDrop';

function AttachmentsSection() {
  const { files, getRootProps, getInputProps, isDragActive, handleOnDragEnd } = useFileDrop();

  return (
    <Box>
      <Text fontSize="lg" fontWeight="bold">
        Ekler / Resimler ve Dokümanlar
      </Text>
      <Text mt={2}>
        Bu bölümde, raporunuza eklemek istediğiniz belgeleri yükleyebilir, düzenleyebilir veya silebilirsiniz.
      </Text>
      <Box display="flex" justifyContent="center" w="100%">
        <DropzoneComponent
          files={files}
          getRootProps={getRootProps}
          getInputProps={getInputProps}
          isDragActive={isDragActive}
          handleOnDragEnd={handleOnDragEnd}
        />
      </Box>
    </Box>
  );
}

export default AttachmentsSection;

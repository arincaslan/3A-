import React from 'react';
import { Box, Text, Heading } from "@chakra-ui/react";
import DropzoneComponent, { useFileDrop } from '../../../../../Tools/UseFileDrop/UseFileDrop';

function AttachmentsSectionEng() {
  const { files, getRootProps, getInputProps, isDragActive, handleOnDragEnd } = useFileDrop();

  return (
    <Box mt={20} p={10} minHeight="1000px">
      <Heading borderBottom="2px solid" borderColor="teal.500" pb={6} fontFamily="heading2" color="teal" fontWeight="bold" as="h2" size="xl">SECTION 11 - Attachments</Heading>
      <Text mt={10} textAlign="center" fontSize="10px">
        In this section, you can upload, edit, or delete documents you wish to include in your report.
      </Text>
      <Box mt={8} display="flex" justifyContent="center" w="100%">
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

export default AttachmentsSectionEng;

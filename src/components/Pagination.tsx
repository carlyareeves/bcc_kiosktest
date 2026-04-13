import { Icon, IconButton, Stack, Box } from "@mui/material";
import { Circle } from "@mui/icons-material";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPlural: string;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPlural,
  onPageChange,
}) => {
  const handleClick = (page: number) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{
        backgroundColor: "var(--neutral-OffWhite)",
        padding: "8px 16px",
        marginBottom: "16px",
        borderRadius: "8px",
      }}
    >
      <Stack direction={"row"} gap={"16px"}>
        <IconButton
          size="small"
          onClick={() => handleClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <Icon>chevron_left</Icon>
        </IconButton>
        <IconButton
          size="small"
          onClick={() => handleClick(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <Icon>chevron_right</Icon>
        </IconButton>
      </Stack>
      <Box>
        {Array.from({ length: totalPages }, (_, index) => (
          <IconButton
            size="small"
            key={index + 1}
            onClick={() => handleClick(index + 1)}
            disabled={currentPage === index + 1}
          >
            <Circle />
          </IconButton>
        ))}
      </Box>
      <Box>
        {totalItems} {itemsPlural} within 500m
      </Box>
    </Stack>
  );
};

export default Pagination;

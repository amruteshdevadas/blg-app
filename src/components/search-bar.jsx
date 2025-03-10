import { useState } from "react";

import {
  TextField,
  CircularProgress,
  List,
  ListItem,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useNavigate();

  const fetchResults = async (searchTerm) => {
    if (!searchTerm) {
      setResults([]);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const mockResults = [
        "Apple",
        "Banana",
        "Cherry",
        "Date",
        "Elderberry",
        "Fig",
        "Grapes",
      ].filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()));
      setResults(mockResults);
      setLoading(false);
    }, 500);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    fetchResults(value);
  };

  const handleItemClick = (item) => {
    if (!query.trim()) return;
    router(`/search?query=${item}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && query.trim()) {
      handleItemClick(query);
    }
  };

  return (
    <div className="relative w-[280px]">
      <div className="flex items-center gap-2">
        <TextField
          // variant="outlined"
          fullWidth
          value={query}
          onChange={handleChange}
          placeholder="Search..."
          size="small"
          handlekeyPress={handleKeyPress}
        />
        <img
          src="/src/assets/search.svg"
          width="16"
          height={16}
          onClick={() => handleItemClick(query)}
          className="cursor-pointer"
        />
      </div>
      {loading && (
        <CircularProgress
          size={20}
          sx={{ position: "absolute", right: 31, top: 11 }}
        />
      )}
      {query && results.length > 0 && (
        <List
          sx={{
            position: "absolute",
            width: "100%",
            background: "white",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
            maxHeight: "150px",
            overflowY: "auto",
            marginTop: "5px",
            zIndex: 10,
          }}
        >
          {results.map((result, index) => (
            <ListItem
              key={index}
              button
              onClick={() => handleItemClick(result)}
              sx={{ cursor: "pointer" }}
            >
              {result}
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
}

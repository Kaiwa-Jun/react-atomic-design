import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";

export const Top = () => {
  return (
    <SContsinar>
      <h2>ユーザー一覧</h2>
      <SearchInput />
    </SContsinar>
  );
};

const SContsinar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

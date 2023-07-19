import { useState } from "react";
import { Modal, Input } from "@nextui-org/react";

import PostSearchCard from "./PostSearchCard";

import { allPosts } from "@/pages";

export default function Search({ isOpen, setIsOpen }: any) {

  const [search, setSearch] = useState("");

  return (
    <div>
      <Modal
        scroll
        width="600px"
        closeButton
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Modal.Header>
          <Input
            size="xl"
            width="100%"
            value={search}
            clearable
            underlined
            color="secondary"
            labelPlaceholder=""
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </Modal.Header>
        <Modal.Body>
          {
            (allPosts != null && search != "") && (
              allPosts?.filter((post: any) => post.frontmatter.title.toLowerCase().includes(search.toLowerCase())).map((post: any) => {
                return (
                  <PostSearchCard post={post} onClick={setIsOpen} />
                )
              })
            )
          }
        </Modal.Body>
      </Modal>
    </div>
  );
}

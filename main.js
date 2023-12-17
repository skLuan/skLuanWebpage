import './style.css'
import { Client } from '@notionhq/client';
// const { Client } = require("@notionhq/client")
// Initializing a client
const notion = new Client({
  auth: import.meta.env.VITE_NOTION_KEY,
});


(async () => {
  const blockId = import.meta.env.VITE_NOTION_PAGE_ID;
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50,
  });
  console.log(response);
})();

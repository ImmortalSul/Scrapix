# Scrapix: A Customizable Web Scraper

Scrapix is a highly customizable web scraper that allows users to create, manage, and execute complex web scraping workflows with a visual, no-code/low-code interface. Built with modern tools, Scrapix simplifies web scraping tasks and integrates advanced features like AI-based data extraction. Whether you're automating repetitive tasks or extracting structured data from websites, Scrapix has you covered.

---

## Tech Stack

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **Next.js**: A React framework for server-side rendering and static site generation.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Radix UI**: A set of accessible and unstyled components for building high-quality web interfaces.
- **Framer Motion**: A library for animations in React.
- **Embla Carousel**: A library for creating carousels in React.
- **React Query**: A library for fetching, caching, and updating asynchronous data in React.
- **Recharts**: A charting library for React.
- **Sonner**: A library for toast notifications in React.
- **React Day Picker**: A library for date picking in React.

### Backend

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Prisma**: An ORM (Object-Relational Mapping) tool for Node.js and TypeScript.
- **PostgreSQL**: A relational database management system.
- **Puppeteer**: A Node library for controlling headless Chrome or Chromium.
- **Stripe**: A library for handling payments and billing.
- **OpenAI**: A library for interacting with OpenAI's GPT models.

### Authentication

- **Clerk**: A library for authentication and user management.

### Utilities

- **Class Variance Authority (CVA)**: A library for managing class names in a type-safe way.
- **Clsx**: A utility for constructing className strings conditionally.
- **Tailwind Merge**: A utility for merging Tailwind CSS classes.
- **Cron Parser**: A library for parsing cron expressions.
- **Date-fns**: A library for manipulating dates in JavaScript.
- **Zod**: A TypeScript-first schema declaration and validation library.

### Configuration and Build Tools

- **ESLint**: A tool for identifying and fixing problems in JavaScript code.
- **PostCSS**: A tool for transforming CSS with JavaScript plugins.
- **Tailwind CSS**: A utility-first CSS framework.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.

---

## Key Features

### Browser Interaction

- **Launch Browser**: Opens a browser instance to begin the web scraping process and interact with web pages.
- **Navigate to URL**: Directly navigate to a specified URL to scrape or interact with the content on the page.

### Data Extraction & Manipulation

- **Page to HTML**: Capture the complete HTML content of the page for detailed analysis and processing.
- **Extract Text from Element**: Easily extract text content from a specific HTML element using a CSS selector.
- **Extract Data via AI**: Leverage AI to intelligently parse HTML content and extract structured data based on a custom prompt, returning results as JSON.
- **Read JSON**: Retrieve and utilize specific keys or properties from a JSON object within your workflow.
- **Build JSON**: Add, modify, or create new data within a JSON object, enabling dynamic workflow customization.

### Automation & Interaction

- **Fill Input**: Automatically fill input fields with predefined values, simulating user input for forms or search bars.
- **Click Element**: Simulate click actions on specific HTML elements, enabling navigation or triggering events on the page.
- **Scroll to Element**: Simulate scrolling to a specified element, useful for pages with infinite scrolling or dynamic content loading.
- **Wait for Element**: Pause the workflow until a specified element is visible or hidden on the page, ensuring reliable scraping.

### Data Delivery

- **Deliver via Webhook**: Send the scraped data to an external API endpoint via a POST request, enabling seamless integration with other tools and services.

---

## How to Get Started

1. Clone the repository:

   ```bash
   git clone https://github.com/immortalsul/scrapix.git
   ```

2. Install dependencies:

   ```bash
   cd scrapix
   npm install
   ```

3. Set up your environment variables in `.env` (refer to the example in `.env.example`).

4. Run the app locally:
   ```bash
   npm run dev
   ```

Visit [http://scarpix.troikahub.tech](http://scrapix.troikahub.tech) to start using Scrapix.

---

## Contributing

We welcome contributions! If you'd like to improve Scrapix, feel free to fork the repository, create a branch, and submit a pull request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```

```

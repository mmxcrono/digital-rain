# Digital Rain

Digital Rain is a browser-based visual representation of falling characters, similar to the "Matrix Rain" effect. This project uses a combination of TypeScript and Sass to generate an interactive and customizable digital rain effect.

## Getting Started

### Prerequisites

- Node.js version 14 or newer
- npm version 6 or newer

### Installation

1. Clone the repository

```sh
git clone https://github.com/mmxcrono/digital-rain.git
```

2. Navigate to the cloned repository

```sh
cd digital-rain
```

3. Install the dependencies

```sh
npm i
```

4. Build the project

```sh
npm run build
```


## Customization

You can customize the number of columns (numCols) and the number of rows (numRows) in the digital rain effect by providing them as query parameters in the URL. For example:

```
file:///C://index.html?numCols=30&numRows=20
```

- `numCols` is a positive integer representing the number of columns.
- `numRows` is a positive integer representing the number of rows.

`numCols` and `numRows` default to 40 and 20, respectively if no parameters are provided.

**Performance Warning**: Be cautious when setting `numCols` or `numRows` to numbers greater than 40, as it can significantly impact performance.

## Author

- Hoang Nguyen

## License

This project is licensed under the MIT License.

## Acknowledgments

This project is inspired by the "digital rain" effect seen in The Matrix film series.

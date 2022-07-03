# Lang Design Practice

Programming language design practice for cicada interns.

- An implementation of [(Untyped) Lambda Calculus](https://en.wikipedia.org/wiki/Lambda_calculus).
- Use C-family syntax.
- Implement call-by-need lazy evaluation.
- Allow recursive in top-level definitions.
  - No mutual recursion, a name must be defined before used.
- A simple module system with only one API -- `import`.
  - It can import module from local file or remote URL.
- Two simple testing functions `assertEqual` and `assertNotEqual`.
  - They can handle beta and eta equivalence.

## Contributions

> Be polite, do not bring negative emotion to others.

- [TODO.md](TODO.md)
- [STYLE-GUIDE.md](STYLE-GUIDE.md)
- [CODE-OF-CONDUCT.md](CODE-OF-CONDUCT.md)
- When contributing, add yourself to [AUTHORS](AUTHORS)

## License

- [GPLv3](LICENSE)

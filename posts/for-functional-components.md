---
title: 'For Functional Components in React'
date: '2021-07-15'
draft: true
---

Thanks to the introduction of Hooks in React 16.8, functional components now provide the same lifecycle functionality as class-based such. So we're left with two choices:

1. Class components, or
2. Functional components + hooks

_If you're new to React, which style should you learn? Which one provides the most benefits? Is the most future-proof?_ The answer is most likely functional components.

### The Syntactical Difference

A functional component is a regular JavaScript function that returns JSX/React Elements:

```js
const MyFunctionalComponent = ({ title }) => <h1>{title}</h1>;
```

A class component requires you to extend from `React.Component`, and create a render function. They come with a constructor, as well as some inbuilt lifecycle methods, such as `componentWillMount()` and `componentDidUpdate()`.

```js
class MyClassComponent extends React.Component {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}
```

Hopefully you already see a clear winner. Nevertheless, three arguments for functional components for the tasteless:

## 1. It's the Future

Big Brother said so, alright:

> We don’t recommend rewriting your existing components overnight, but you can start using Hooks in the new ones
>
> <cite>[engineering.fb.com](https://engineering.fb.com/2019/02/22/open-source/react-hooks/)</cite>

The key word here is _overnight_.

Almost all new projects are using functional components. And many old projects with class components are refactoring.

## 2. Leaner / Less Verbose

- No constructor
- Easier to pass props into (no `this` keyword)
- Easier to test because they're so simple (no internal state, all they do is return JSX)

Have look at the syntactical difference above again. The functional example is less than 50% of the number of lines.

## 3. Easier Logic-Sharing

Instead of using ugly wrapper components, we can share logic between components using hooks. It's easier, look:

```js
const useCustomLogic = () => {
  // Your custom hook logic
};

function App() {
  const { sharedParam } = useCustomLogic();

  return (
    <>
      <Header param={sharedParam} />
      <SomeComponent param={sharedParam} />
    </>
  );
}
```

> Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community.
>
> <cite>[reactjs.org/docs](https://reactjs.org/docs/hooks-intro.html)</cite>

## Conclusion: Classes Are Doomed?

They're probably not disappearing any time soon. But considering the amount of effort the React team has put into hooks (and their widespread adoption), I'd consider React classes' demise pretty likely.

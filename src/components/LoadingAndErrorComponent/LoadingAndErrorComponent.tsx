type LoadingAndErrorComponentProps = {
  isError: boolean;
  isLoading: boolean;
  error: Error | null;
};

const LoadingAndErrorComponent = ({
  isError,
  isLoading,
  error,
}: LoadingAndErrorComponentProps) => {
  return (
    <div>
      {isLoading && <p>...Loading</p>}

      {isError && (
        <>
          <p>Something went wrong.</p>
          <p>{error?.message}</p>
        </>
      )}
    </div>
  );
};

export default LoadingAndErrorComponent;

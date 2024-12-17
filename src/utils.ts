export async function withTimeoutAsync(task: () => any, timeout: number) {
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject('Task timed out'), timeout)
  );

  return Promise.race([task, timeoutPromise]);
}

export function sleep(t: number) {
  return new Promise((resolve) => { setTimeout(resolve, t); });
}
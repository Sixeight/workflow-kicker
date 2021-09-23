const API_BASE = 'https://api.github.com';

function dispatchWorkflow(
  repository: string,
  workflowId: string,
  ref: string,
  inputs: {[key: string]: unknown},
  token: string
) {
  const path = `/repos/${repository}/actions/workflows/${workflowId}/dispatches`;
  const payload = {
    ref: ref,
    inputs: inputs,
  };

  apiRequest(path, payload, token);
}

function apiRequest(path: string, payload: object, token: string) {
  UrlFetchApp.fetch(API_BASE + path, {
    method: 'post',
    contentType: 'application/json',
    headers: {
      authorization: `token ${token}`,
      accept: 'application/vnd.github.v3+json',
    },
    payload: JSON.stringify(payload),
  });
}

const API_BASE = 'https://api.github.com';

class Workflow {
  static dispatch(
    token: string,
    repository: string,
    workflowId: string,
    ref: string,
    inputs: {[key: string]: string}
  ) {
    const path = `/repos/${repository}/actions/workflows/${workflowId}/dispatches`;
    const payload = {
      ref: ref,
      inputs: inputs,
    };

    Workflow.apiRequest(path, payload, token);
  }

  private static apiRequest(path: string, payload: object, token: string) {
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
}

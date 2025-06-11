# GitCommit

提交信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthorEmail** | **string** | 作者邮箱 | [optional] [default to '']
**AuthorName** | **string** | 作者姓名 | [optional] [default to '']
**CommitDate** | **number** | 提交日期 | [optional] [default to undefined]
**Committer** | [**Committer**](Committer.md) |  | [optional] [default to undefined]
**CreatedAt** | **number** | 提交日期 | [optional] [default to undefined]
**Parents** | **Array&lt;string&gt;** | 父提交 | [optional] [default to undefined]
**Sha** | **string** | 提交 ID | [optional] [default to '']
**ShortMessage** | **string** | 提交信息 | [optional] [default to '']

## Example

```typescript
import { GitCommit } from './api';

const instance: GitCommit = {
    AuthorEmail,
    AuthorName,
    CommitDate,
    Committer,
    CreatedAt,
    Parents,
    Sha,
    ShortMessage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
